pipeline {

    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        COMPOSE_PROJECT_NAME = 'moviehub'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out MovieHub source code...'
                checkout scm
            }
        }


        stage('Verify Files') {
            steps {
                sh '''
                    echo "Current directory:"
                    pwd

                    echo "Project files:"
                    ls -la

                    test -f docker-compose.yml
                    test -f Backend/Dockerfile
                    test -f frontend/Dockerfile
                    test -f frontend/nginx.conf
                '''
            }
        }


        stage('Docker Check') {
            steps {
                sh '''
                    docker --version
                    docker compose version
                '''
            }
        }


        stage('Build Images') {
            steps {
                echo 'Building MovieHub Docker images...'

                sh '''
                    docker compose build --no-cache
                '''
            }
        }


        stage('Stop Old Containers') {
            steps {
                echo 'Stopping existing MovieHub containers...'

                sh '''
                    docker compose down || true
                '''
            }
        }


        stage('Deploy') {
            steps {
                echo 'Starting MovieHub containers...'

                sh '''
                    docker compose up -d
                '''
            }
        }


        stage('Container Status') {
            steps {
                sh '''
                    echo "Container status:"
                    docker compose ps
                '''
            }
        }


        stage('Health Check') {
            steps {
                sh '''
                    echo "Waiting for application startup..."
                    sleep 15

                    echo "Checking frontend..."
                    curl --fail http://localhost/

                    echo "Checking containers..."
                    docker compose ps
                '''
            }
        }

    }


    post {

        success {
            echo 'MovieHub deployment completed successfully.'
        }


        failure {
            echo 'MovieHub deployment failed.'

            sh '''
                echo "===== Docker Compose Status ====="
                docker compose ps || true

                echo "===== Backend Logs ====="
                docker compose logs backend --tail=100 || true

                echo "===== Frontend Logs ====="
                docker compose logs frontend --tail=100 || true

                echo "===== MySQL Logs ====="
                docker compose logs mysql --tail=100 || true
            '''
        }


        always {
            sh '''
                echo "===== Final Container Status ====="
                docker compose ps || true
            '''
        }

    }

}
