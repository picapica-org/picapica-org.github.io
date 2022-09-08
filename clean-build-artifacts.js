const { rm, readdir } = require('fs/promises');
const path = require('path');

/**
 * @param {string} dir
 */
async function clean(dir) {
	dir = path.resolve(dir);
	console.log(`Cleaning ${dir}`);

	let contents = await readdir(dir);

	contents = contents.filter(f => !/^(?:\.(?:nojekyll|git|github)|CNAME)$/i.test(f));
	console.log(`Removing:\n${contents.join("\n")}`);

	await Promise.all(
		contents.map(f => {
			rm(path.join(dir, f), { recursive: true, force: true });
		})
	);
}

clean('.').then(
	() => console.log('Done.'),
	reason => {
		console.error(`Error: ${reason}`);
		process.exit(1);
	},
)
