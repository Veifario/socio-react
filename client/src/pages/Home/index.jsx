import React from "react";
import s from "./index.module.scss";
import { Box, useMediaQuery } from "@mui/material";
import {
	Header,
	UserWidget,
	MyPostWidget,
	PostsWidget,
	FriendsListWidget,
} from "../../components";
import { useSelector } from "react-redux";

const Home = () => {
	const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
	const { _id, picturePath } = useSelector((state) => state.user);

	return (
		<Box>
			<Header />
			<Box
				width="100%"
				padding="2rem 6%"
				display={isNonMobileScreens ? "flex" : "block"}
				gap="0.5rem"
				justifyContent="space-between"
			>
				<Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
					<UserWidget userId={_id} picturePath={picturePath} />
				</Box>
				<Box
					flexBasis={isNonMobileScreens ? "42%" : undefined}
					mt={isNonMobileScreens ? undefined : "2rem"}
				>
					<MyPostWidget picturePath={picturePath} />
					<PostsWidget userId={_id} />
				</Box>
				{isNonMobileScreens && (
					<Box flexBasis="26%">
						<FriendsListWidget userId={_id} />
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Home;
