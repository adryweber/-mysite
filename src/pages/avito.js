import React from 'react';
import Layout from '../components/layout';

import Kit from '../components/content/kit';
import Snip from '../components/content/snip';
import Card from '../components/content/card';
import Phakt from '../components/content/phakt';
import Navigate from '../components/content/navigate';
import Admin from '../components/content/admin';
import Links from '../components/content/links';

import { MenuItems } from '../components/menu';


export default ({ data }) => {
	return (
		<Layout menuItems={<MenuItems />}>
			<Kit />
			<Snip />
			<Card />
			<Phakt />
			<Navigate />
			<Admin />
			<Links />
		</Layout>
	);
};
