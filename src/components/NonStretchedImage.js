import React from 'react';
import Image from 'gatsby-image';

export const NonStretchedImage = props => {
	let normalizedProps = props
	if (props.fluid && props.fluid.presentationWidth) {
		normalizedProps = {
			...props,
			style: {
				...(props.style || {}),
				maxWidth: props.fluid.presentationWidth,
				// margin: "0 auto",
			},
		}
	}

	return <Image {...normalizedProps} />
}