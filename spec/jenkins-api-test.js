var JenkinsApi = require('../jenkinsApi').JenkinsAPI,
    config = require('../config.json'),
    chai = require('chai'),
    url = 'http://192.168.99.100:32769/';

describe('Jenkins api', function () {
    describe('#getJobs()', function () {
        it('should return all jobs', function () {
            var jobs = JenkinsApi.getJobs(url);
            jobs.then(function (data) {
                console.log(data);
                chai.expect(data).to.equal(expected);
            });
        });
    });

    describe('#getJobInfo', function () {
        it('should return job information', function () {
            var job = JenkinsApi.getJobs('Job2');
            job.then(function (data) {
                console.log(data);
                chai.expect(data).to.equal(expected);
            });
        });
    });

    describe('#getLastBuildInfo', function () {
        it('should return last job information', function () {
            var job = JenkinsApi.getLastBuildInfo(url, 'Job2');
            job.then(function (data) {
                console.log(data);
                //chai.expect(data).to.equal(expected);
            });
        });
    });

    describe('#getLastBuildInfo', function () {
        it('should return last job report', function () {
            var job = JenkinsApi.getLastBuildReport(url, 'Job2');
            job.then(function (data) {
                console.log(data);
                chai.expect(data).to.equal(expected);
            });
        });
    });

    describe('#getLastSuccess', function () {
        it('should return last job success', function () {
            var job = JenkinsApi.getLastSuccess(url, 'Job2');
            job.then(function (data) {
                console.log(data);
                chai.expect(data).to.equal(expected);
            });
        });
    });
});