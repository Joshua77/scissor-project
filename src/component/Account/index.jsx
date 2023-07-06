import React from "react";
import { useState, useEffect, Fragment, useCallback, useMemo } from "react";

//I am not using all the MATERIAL UI COMPONENTS HERE, JUST TYPING IT OUT FIRST
import {
  Grid,
  Box,
  Typography,
  CircularProgress,
  Divider,
  Snackbar,
  Button,
} from "@mui/material";

//I need the Navbar, LinkCard (link dashboard), Nanoid, LinkShortenerModal (the real operation center)
//import NavBar from "./NavBarAuth.jsx";
import NavBarAuth from "./NavBarAuth.jsx";
import LinkCard from "./LinkCard.jsx";
import ShortenURLBox from "./ShortenURLBox.jsx";
import { app, db, auth } from "../../utils/init-firebase.js";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { nanoid } from "nanoid";
import copy from "copy-to-clipboard";

// const dummyData = [
//   {
//     id: "31r08ms0fam",
//     createdAt: new Date(),
//     name: "My website",
//     longURL: "https://google.com",
//     shortCode: "masdo",
//     totalClicks: 313,
//   },
//   {
//     id: "31r08asdasfam",
//     createdAt: new Date(),
//     name: "E-book",
//     longURL: "https://drive.google.com/asdokasnd89",
//     shortCode: "182as",
//     totalClicks: 32,
//   },
//   {
//     id: "asdasdas",
//     createdAt: new Date(),
//     name: "E-book",
//     longURL: "https://drive.google.com/asdokasnd89",
//     shortCode: "182as",
//     totalClicks: 32,
//     cool: ["1,2,3"],
//   },
// ];

const Account = () => {
  const [fetchingLinks, setFetchingLinks] = useState(true);
  const [newLinkToastr, setNewLinkToastr] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [links, setLinks] = useState([]);
  const userUid = auth.currentUser.uid;
  const linksPathRef = useMemo(
    () => collection(doc(db, "users", userUid), "links"),
    [userUid]
  );

  const handleCreateLink = async (name, longURL) => {
    const link = {
      name,
      longURL:
        longURL.includes("https://") || longURL.includes("http://")
          ? longURL
          : `http://${longURL}`,
      createdAt: serverTimestamp(),
      shortCode: nanoid(6),
      totalClicks: 0,
    };

    try {
      const resp = await addDoc(linksPathRef, link);
      setLinks((links) => [
        ...links,
        { ...link, createdAt: new Date(), id: resp.id },
      ]);
      setOpenModal(false);
    } catch (error) {
      console.error("Error creating link:", error);
    }
  };

  useEffect(() => {
    const fetchingLinks = async () => {
      try {
        const snapshot = await getDocs(linksPathRef);
        const tempLinks = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
        }));
        setLinks(tempLinks);
        setFetchingLinks(false);
      } catch (error) {
        console.error("Error getting links:", error);
      }
    };

    fetchingLinks();
  }, [linksPathRef]);

  const handleDeleteLink = useCallback(
    async (linkDocID) => {
      if (window.confirm("Do you want to delete the link?")) {
        try {
          await deleteDoc(doc(linksPathRef, linkDocID));
          setLinks((oldLinks) =>
            oldLinks.filter((link) => link.id !== linkDocID)
          );
        } catch (error) {
          console.error("Error deleting link:", error);
        }
      }
    },
    [linksPathRef]
  );

  const handleCopyLink = useCallback((shortURL) => {
    copy(shortURL);
    setNewLinkToastr(true);
  }, []);

  return (
    <>
      <Snackbar
        open={newLinkToastr}
        onClose={() => setNewLinkToastr(false)}
        autoHideDuration={2000}
        message="Link copied to the clipboard"
      />
      {openModal && (
        <ShortenURLBox
          createShortenLink={handleCreateLink}
          handleClose={() => setOpenModal(false)}
        />
      )}
      <NavBarAuth />
      <Box mt={{ xs: 3, sm: 5 }} p={{ xs: 2, sm: 0 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Box mb={5} display="flex">
              <Box mr={3}>
                <Typography variant="h4">Links</Typography>
              </Box>
              <Button
                onClick={() => setOpenModal(true)}
                disableElevation
                variant="contained"
                color="primary"
              >
                Create new
              </Button>
            </Box>

            {fetchingLinks ? (
              <Box textAlign="center">
                <CircularProgress />
              </Box>
            ) : !links.length ? (
              <Box textAlign="center">
                <img
                  style={{
                    width: "225px",
                    height: "auto",
                    marginBottom: "24px",
                  }}
                  src="/assets/no_links.svg"
                  alt="no links"
                />
                <Typography>You have no links</Typography>
              </Box>
            ) : (
              links
                .sort(
                  (prevLink, nextLink) =>
                    nextLink.createdAt - prevLink.createdAt
                )
                .map((link, idx) => (
                  <Fragment key={link.id}>
                    <LinkCard
                      {...link}
                      deleteLink={handleDeleteLink}
                      copyLink={handleCopyLink}
                    />
                    {idx !== links.length - 1 && (
                      <Box my={4}>
                        <Divider />
                      </Box>
                    )}
                  </Fragment>
                ))
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Account;
