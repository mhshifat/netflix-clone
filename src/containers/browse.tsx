import Fuse from "fuse.js";
import React, { useContext, useEffect, useState } from "react";
import { Card, Header, Loading, Player } from "../components";
import * as ROUTES from "../constants/routes";
import { IContent } from "../hooks/useContent";
import { FirebaseContext } from "../providers/FirebaseProvider";
import FooterContainer from "./footer";
import SelectProfileContainer from "./profile";

interface Props {
  slides: {
    [key: string]: { title: string; data: IContent[] }[];
  };
}

const BrowseContainer: React.FC<Props> = ({ slides }) => {
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState<typeof slides["series"]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [category, slides]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const user = firebase.auth().currentUser;

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={user?.photoURL || ""} />
      ) : (
        <Loading.ReleaseBody />
      )}
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/logo.svg"
              alt="Netflix"
            />
            <Header.TextLink
              active={category === "series"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user?.photoURL || ""} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user?.photoURL || ""} />
                  <Header.TextLink active={false}>
                    {user?.displayName}
                  </Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink
                    active={false}
                    onClick={() => firebase.auth().signOut()}
                  >
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.FeaturePlayButton>Play</Header.FeaturePlayButton>
        </Header.Feature>
      </Header>

      <Card.Group flexDirection="column" alignItems="flex-start" margin="0">
        {slideRows.map((item) => (
          <Card key={`${category}-${item.title.toLowerCase()}`}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Entities>
              {item.data.map((cardItem) => (
                <Card.Item item={cardItem} key={cardItem.docId}>
                  <Card.Image
                    src={`/images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{cardItem.title}</Card.SubTitle>
                    <Card.Text>{cardItem.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
