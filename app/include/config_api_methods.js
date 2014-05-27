exports.methods = 

[		
		{
			"name":"api.spec.methods",
			"description":"Return the list of available API response methods.",
			"documented":1,
			"enabled":1,
			"library":"api_spec"
		},
	
		{
			"name":"api.spec.formats",
			"description":"Return the list of valid API response formats, including the default format",
			"documented":1,
			"enabled":1,
			"library":"api_spec"
		},

		{
			"name":"test.echo",
			"description":"A testing method which echo's all parameters back in the response.",
			"documented":1,
			"enabled":1,
			"library":"api_test"
		},

		{
			"name":"test.error",
			"description":"Return a test error from the API",
			"documented":1,
			"enabled":1,
			"library":"api_test"
		},
		
		{
			"name":"tweets.getInfo",
			"description":"Get info about a tweet",
			"documented":1,
			"enabled":1,
			"library":"api_tweets",
			"parameters":[{
					"name":"tweet_id",
					"description":"A valid tweet ID.",
					"required":1
				}
			]
			
		},

]