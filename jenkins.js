var Jenkins = require('jenkins-api');
"use strict";

exports.JenkinsAPI = (function () {
    var jenkins,
        self = this;

    this.init = function (url) {
        self.jenkins = Jenkins.init(url);
    };

    this.getJobs = function () {
        var result;
        self.jenkins.all_jobs(function (err, data) {
            if (err) {
                throw 'No job found error:' + err;
            }
            console.log(data);
            result = data;
        });
        return result;
    };
    //...
});
