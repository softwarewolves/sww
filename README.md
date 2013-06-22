softwarewerewolves
==================

Simple XMPP implementation of the werewolves party game.

To run on Mac OS X:

1. download and install node
2. download and install Xcode
3. download and install MacPorts
4. install icu headers with MacPorts <pre><code>sudo port install icu +devel</code></pre>
5. install node-stringprep <pre><code>npm install node-stringprep</code></pre>
6. install node-xmpp <pre><code>npm install node-xmpp</code></pre>

For tests `should` and `mocha` are used. Install the former as follows

    $ npm install should

Use sudo to install `mocha` to be sure that `npm` creates a link in `/usr/local/bin`

    $ sudo npm install mocha

To run the tests, make sure that `mocha` is in your path, cd into the git repository and run

    $ mocha
    
Or, even better, use the --watch and --reporter options:

    $ mocha --reporter spec --watch

The examples directory shows how to use the library. `jabber_example.js` sets up a game co-ordinated by some bots connecting to the jabber.org XMPP server. To run from your git repository 

    $ node examples/jabber_example.js

#  Node.js clickstart

package.json is used to specify what packages are needed - main.js is the default server app
(you can set main_js via bees config:set to override it to something else)

<a href="https://grandcentral.cloudbees.com/?CB_clickstart=https://raw.github.com/CloudBees-community/nodejs-clickstart/master/clickstart.json"><img src="https://d3ko533tu1ozfq.cloudfront.net/clickstart/deployInstantly.png"/></a>

# To run manually locally


0. Install node.js
1. Clone this repo
2. node app/main.js

# To deploy manually to CloudBees

1. cd app
2. zip -r ../app.zip
3. bees app:deploy -t node -RPLUGIN.SRC.node=https://s3.amazonaws.com/clickstacks/admin/nodejs-plugin-0.8.21.zip ../app.zip


# The node.js clickstack
See here if you want to change how it work: https://github.com/CloudBees-community/node-clickstack
The node-clickstack makes this possible - if you want to tweak how the node.js container works
fork that repo, change it, and use it for the -RPLUGIN.SRC.nodejs url above.

Otherwise - fork this !