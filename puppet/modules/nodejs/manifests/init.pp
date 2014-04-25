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
  
}