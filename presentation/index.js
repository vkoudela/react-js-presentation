import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text, S
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reactLogo: require("../assets/react.png")
};

preloader(images);

const theme = createTheme({
  primary: "#0e2738",
  secondary: "#67dbfa",
  tertiary: "white",
  quartenary: "white"
});

const color = {
  textColor: "#ffffff",
  reactBlue: "#67dbfa"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={theme.bgColor}>
            <Image src={images.reactLogo.replace("/", "")} margin="" height="400px"/>
            <Heading size={1} caps>
              ReactJS
            </Heading>
            <Heading size={5} textColor={color.reactBlue}>
              5. Devz Meetup, Varaždin
            </Heading>
            <Heading size={6} textColor={color.reactBlue}>
              Vlatko Koudela
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor={theme.bgColor}>
            <Heading size={1} caps textColor="secondary" textFont="primary">
              Što je ReactJS?
            </Heading>
            <List textColor={color.textColor}>
              <ListItem>React is an open-source JavaScript library providing a view for data rendered as HTML</ListItem>
              <ListItem>A JavaScript library for building user interfaces</ListItem>
            </List>
            <Appear>
              <div>
                <Heading size={4} textColor="tertiary">
                  ReactJS je JavaScript library.
                </Heading>
                <Heading size={4} textColor="secondary">
                  Ne framework.
                </Heading>
              </div>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps textColor="secondary" textFont="primary">
              Javascript
            </Heading>
            <Text>&nbsp;</Text>
            <Text textColor="tertiary">ES5 / ES6 / ES2016 / ...</Text>
            <Text textColor="tertiary">Babel / TypeScript / ...</Text>
            <Text textColor="tertiary">Angular / Vue / Ember / Polymer / Riot / ...</Text>
            <Text textColor="tertiary">Node.js / MeteorJS / ...</Text>
          </Slide>
          <Slide transition={["none"]} bgColor="primary">
            <Heading size={1} caps textColor="secondary" textFont="primary">
              Javascript
            </Heading>
            <Text>&nbsp;</Text>
            <Text textColor="tertiary">ES5 / ES6 / ES2016 / ...</Text>
            <Text textColor="tertiary"><S type="underline" textColor="secondary">Babel</S> / TypeScript / ...</Text>
            <Text textColor="tertiary">Angular / Vue / Ember / Polymer / Riot / ...</Text>
            <Text textColor="tertiary">Node.js / MeteorJS / ...</Text>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary"
            notes="Hard to find cities without any pizza"
          >
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Pizza Toppings
            </Heading>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem/>
                    <TableHeaderItem>2011</TableHeaderItem>
                    <TableHeaderItem>2013</TableHeaderItem>
                    <TableHeaderItem>2015</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>None</TableItem>
                    <TableItem>61.8%</TableItem>
                    <TableItem>39.6%</TableItem>
                    <TableItem>35.0%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pineapple</TableItem>
                    <TableItem>28.3%</TableItem>
                    <TableItem>54.5%</TableItem>
                    <TableItem>61.5%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pepperoni</TableItem>
                    <TableItem/>
                    <TableItem>50.2%</TableItem>
                    <TableItem>77.2%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Olives</TableItem>
                    <TableItem/>
                    <TableItem>24.9%</TableItem>
                    <TableItem>55.9%</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
