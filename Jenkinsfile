#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage('Setup') {
            steps {
                echo 'Setting up pip dependencies'
                //pip install mkdocs==0.16.3
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