#!/usr/bin/env groovy

pipeline {
    agent any
    environment {
        TYPESENSE_API_KEY = credentials('TYPESENSE_API_KEY')
    }
    stages {
        stage('Setup') {
            steps {
                echo 'Setting up pnpm'
                sh 'pnpm i'
            }
        }
        stage('Build Docs') {
            steps {
                echo 'Building docs'
                sh 'pnpm build'
            }
        }
        stage('Build Site') {
            steps {
                echo 'Building site'
                sh 'pnpm site-build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying files to folder'
                dir('site') {
                    sh "cp -r dist/* /opt/crafttweaker_docs/"
                }
            }
        }
    }
    options {
        disableConcurrentBuilds()
    }
}
