require('dotenv').config({path: __dirname + '/../.env'});
const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },
    async show (request, response) {
        const { _id } = request.params;
        const dev = await Dev.findOne({ _id });
        return response.json(dev);
    },
    async search(request, response) {
        const { longitude, latitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: process.env['SEARCH_RADIUS'] * 1000,
                },
            },
        });
        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, longitude, latitude } = request.body;
        let dev = await Dev.findOne({ github_username });
        if (!dev) {
            const techsArray = parseStringAsArray(techs);
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
            const sendSocketMessageTo = findConnections({
                latitude, longitude
            }, techsArray);
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
        return response.json(dev);
    },
    async update(request, response) {
        const { _id } = request.params;
        let dev = await Dev.findOne({ _id });
        if (!dev) {
            return response.json({
                success: false,
                message: 'Dev not found',
            });
        }
        const { techs, longitude, latitude } = request.body;
        const techsArray = parseStringAsArray(techs);
        const apiResponse = await axios.get(`https://api.github.com/users/${dev.github_username}`);
        const { name = login, avatar_url, bio } = apiResponse.data;
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
        dev.name = name;
        dev.avatar_url = avatar_url;
        dev.bio = bio;
        dev.techs = techsArray;
        dev.location = location;
        dev.save();
        response.json(dev);
    },
    async destroy(request, response) {
        const { _id } = request.params;
        const dev = await Dev.findOne({ _id });
        if (!dev) {
            return response.json({
                success: false,
                message: 'Dev not found',
            });
        }
        dev.remove((error) => {
            if (error) {
                return response.json({
                    success: false,
                    message: error,
                });
            }
            return response.json({
                success: true,
                message: 'Dev deleted successfully',
            });
        });
    },
}