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
} from "@material-ui/core";

//I need the Navbar, LinkCard (link dashboard), Nanoid, LinkShortenerModal (the real operation center)
import NavBar from "./NavBar.jsx";
import LinkCard from "./LinkCard.jsx";
import shortenURLBox from "./shortenURLBox.jsx";
import { app, firestore, auth } from "../../firebase";
import { nanoid } from "nanoid";
import copy from "copy-to-clipboard";

const Account = () => {

  const [shortenURLBox, setShortenURLBox] = useState(false); //the shortenurl modal will not open until we say so
  //when we login, we should start loading any available links previously created
  const [gettingLinks, setGettingLinks] = useState(true);
  //newlinktoastr - message display
  const [newLinkToastr, setNewLinkToastr] = useState(false);
  //the links array is set to empty initially
  const [links, setLinks] = useState([]);

  //THE HANDLER FUNCTIONS WILLBE HERE 
  //CreateShortLink Handler

  //check of the name is supposed to take a comma or colon or semicolon and
  //that of the Long url too

  const handleCreateLink = async (name, longURL) =>{
    const link = {name,
      longURL: longURL.includes("https://")|| ("http://") ? longURL: `http://{$longURL}`,
      createdAt: app.firestore.FieldValue.serveTimestamp(),
      shortCode: nanoid(6),
      totalClicks: 0,};

    const resp = await linksPathRef.add(link);

    setLinks((links) => [...links, {...link, createdAt: newDate(), id: resp.id},])
    setShortenURLBox(false);
  
   };

  //to fetch the links that already exist in the firestore collection

  useEffect(() =>{
    const gettingLinks = async() =>{
      snapshot = await LinksPathRef.get();

      const tempLinks = [];

      snapshot.ForEach((doc) => tempLinks.push({...doc(data), id: doc.id, createdAt: doc.data().CreatedAt.toDate(),}));

      setLinks(tempLinks);
      setGettingLinks(false);

      gettingLinks();
    }
  }, [linksPathRef]);


  const handleCopyLink = useCallback((shortURL) =>{
    copy(shortURL)
    setNewLinkToastr(true);
  },[]);


  const handleDeleteLink = useCallback(async (linkDocID) =>{
    if(window.confirm("Do you want to delete the link?")){
      await linksPathRef.doc(linkDocID).delete();

      setLinks((oldLinks) => oldLinks.filter((link) => link.id !== linkDocID));
    }
  }, [linksPathRef]);

  return (
    <>
      <Snackbar open={newLinkToastr} onClose ={() => setNewLinkToastr(false)} autoHideDuration ={2000} 
      message ="link copied to clipboard"/>
      { shortenURLBox && (<shortenURLBox createShortenLink = {handleCreateLink} handleClose = {() => setShortenURLBox(false) }/>)}
      <NavBar />
      <div>Links</div>
      <button onClick={() => setShortenURLBox(true)}> Create New </button>

      {fetchingLinks ? (
              <div className="circular-progress">
                <CircularProgress />
              </div>
            ) : !links.length ? (
              <div className="center-nolinkimg">
                <img
                  style={{
                    width: "225px",
                    height: "auto",
                    marginBottom: "24px",
                  }}
                  src="/assets/no_links.svg"
                  alt="no links"
                />
                <h3>You have no links</h3>
              </div>
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
    </>
  );
};

export default Account;
