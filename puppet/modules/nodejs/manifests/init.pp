# == Class: nodejs
#
# Installs packages for nodejs.
#
class nodejs {
	package { ['nodejs']:
		ensure => present;
	}

	file {
		"/usr/bin/node":
		ensure => link,
		target => "/usr/bin/nodejs";
	}
	
	exec { 'npm install -g nodemon':
		command => '/usr/bin/npm install -g nodemon';
	}
	
  
}