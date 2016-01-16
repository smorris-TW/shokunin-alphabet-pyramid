arg="run"
arg=$(echo $1 | tr '[:upper:]' '[:lower:]')


function logMessage {
    local timestamp=$(date "+%Y-%m-%d %H:%M:%S ")
    local message="$timestamp $*"
    echo "$message"
}

function main {
    if [[ $arg != '' ]]
    then
        logMessage 'npm install'
        npm install
    fi

    if [[ $arg == 'test' ]]
    then
        logMessage 'test'
        ./node_modules/jasmine/bin/jasmine.js
    else
        logMessage 'run'
        node app.js $arg
    fi

    logMessage 'done.'
}

main