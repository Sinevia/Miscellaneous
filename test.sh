#!/bin/bash
sudo apt-get install -y php5 php5-mysql mysql
sudo apt-get install php-pear
sudo pear channel-discover pear.phpunit.de
sudo pear install phpunit/PHPUnit
sudo pear install PHP_CodeSniffer
sudo pecl install xdebug
sudo pear channel-discover pear.phing.info
sudo pear install phing/phing
phing test
git ftp push --user "...." --passwd "...." --syncroot project/source ftp://ftp.target.com/
