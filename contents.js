/**
 * This contents works differently than other contents.js in subdirectories,
 * the build script will try to find 'README.md' in each listed directory,
 * and use the first h1 title (e.g. # Hello World => "Hello World") as the
 * name displayed on the navbar.
 * 
 * If the folder or folder/README.md dose not exist, the build script will
 * append "(TBD)" to the pathname and point the link to 404 error page.
 */
export default [
	{
		category: 'basics',
		directories: ['combinational', 'structural', 'sequential']
	},
	{
		category: 'advanced',
		directories: ['fsm', 'fsmd']
	},
	{
		category: 'extras',
		directories: ['misc', 'testbenches']
	}
]