#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage('Cleanup') {
            steps {
                echo 'Cleaning up'
                sh 'chmod +x cleanup.sh'
                sh 'bash ./cleanup.sh'
            }
        }
        stage('Build') {
            steps {
                echo 'Building wiki files'
                sh 'chmod +x build.sh'
                sh 'bash ./build.sh'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                }
            }
        }
    post {
        success {
            echo 'Success, now moving to web server'
            sh 'chmod +x move_to_webDir.sh'
            sh 'bash ./move_to_webDir.sh'
        }
    }
}