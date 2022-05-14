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
                sh 'cd site && npm ci'
            }
        }
        stage('Build') {
            steps {
                echo 'Building files'
                sh 'npm run-script build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying docker container'
                dir('site') {
                    sh "docker-compose up -d --build"
                }
            }
        }
        stage('Clean') {
            steps {
                echo 'Cleaning output dirs'
                cleanWs deleteDirs: true, notFailBuild: true, patterns: [[pattern: 'build/**', type: 'INCLUDE'], [pattern: 'site/docs/**', type: 'INCLUDE']]
            }
        }
    }
    options {
        disableConcurrentBuilds()
    }
    triggers {
        cron('0 */24 * * *')
    }
}
