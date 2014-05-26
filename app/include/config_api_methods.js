exports.methods = 

[
	{
		"api.spec.methods":[
			{
				"description":"Return the list of available API response methods.",
				"documented":1,
				"enabled":1,
				"library":"api_spec"
			}
		],
	},

	{
		"api.spec.formats":[
			{
				"description":"Return the list of valid API response formats, including the default format",
				"documented":1,
				"enabled":1,
				"library":"api_spec"
			}
		],
	},

	{
		"test.echo":[
			{
				"description":"A testing method which echo's all parameters back in the response.",
				"documented":1,
				"enabled":1,
				"library":"api_test"
			}
		],
	},

	{
		"test.error":[
			{
				"description":"Return a test error from the API",
				"documented":1,
				"enabled":1,
				"library":"api_test"
			}
		],
	},
	

]