#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage('Setup') {
            steps {
                echo 'Cleaning up'
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                echo 'Building wiki files'
                sh 'npm build'
            }
        }
    }
}