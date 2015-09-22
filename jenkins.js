var jenkinsapi = require('jenkins-api'),
    RSVP = require('rsvp');

var JenkinsAPI = {

    getJobs: function (url) {
        var jenkins = jenkinsapi.init(url);
        return new RSVP.Promise(function (resolve, reject) {
            jenkins.all_jobs(function (err, data) {
                reject(err);
                resolve(data);
            });
        });
    },

    getJobInfo: function (url, job) {
        var jenkins = jenkinsapi.init(url);
        return new RSVP.Promise(function (resolve, reject) {
            jenkins.job_info(job, function (err, data) {
                reject(err);
                resolve(data);
            });
        });
    },

    getLastBuildInfo: function (url, job) {
        var jenkins = jenkinsapi.init(url);
        return new RSVP.Promise(function (resolve, reject) {
            jenkins.last_build_info(job, function (err, data) {
                reject(err);
                resolve(data);
            });
        });
    },

    getLastBuildReport: function (url, job) {
        var jenkins = jenkinsapi.init(url);
        return new RSVP.Promise(function (resolve, reject) {
            jenkins.last_build_report(job, function (err, data) {
                reject(err);
                resolve(data);
            });
        });
    },

    getLastSuccess: function (url, job) {
        var jenkins = jenkinsapi.init(url);
        return new RSVP.Promise(function (resolve, reject) {
            jenkins.last_success(job, function (err, data) {
                reject(err);
                resolve(data);
            });
        });
    }
};

exports.JenkinsAPI = JenkinsAPI;