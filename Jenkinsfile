#!/usr/bin/env groovy

pipeline {
    agent any
    environment {
            CROWDIN_TOKEN     = credentials('crowdin-token')
            CROWDIN_PROJECT_ID = credentials('crowdin-project-id')
        }
    stages {
        stage('Setup') {
            steps {
                echo 'Setting up npm'
                sh 'npm ci'
                sh 'cd site'
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                echo 'Building wiki files'
                sh 'npm run-script build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying docker container'
                sh 'cd site'
                sh "docker-compose up -d --build"
            }
        }
    }
    options {
        disableConcurrentBuilds()
    }
}