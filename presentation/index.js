import React from "react";

import {
  Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text, S
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
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
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="secondary" textFont="primary">
              React vs Angular
            </Heading>
            <Appear>
              <List textColor={color.textColor}>
                <ListItem>React vs AngularJS – How the two Compare | Codementor</ListItem>
                <ListItem>Angular vs. React - the tie breaker - AirPair</ListItem>
                <ListItem>Angular 2 versus React: There Will Be Blood — Free Code Camp</ListItem>
                <ListItem>Is React killing Angular? - Quora</ListItem>
                <ListItem>Angular vs React : A Side-By-Side Comparison | hack.guides()</ListItem>
                <ListItem>React vs Angular 2 - compare the incomparable? | Scalac</ListItem>
                <ListItem>AngularJS vs. React - Which One to Pick? - The Media Temple Blog</ListItem>
                <ListItem>Angular vs Backbone vs React vs Ember notes · GitHub</ListItem>
                <ListItem>Forget Angular & Ember, React Has Already Won the Client-Side War</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Table>
              <thead>
              <TableRow>
                <TableHeaderItem>
                  <Heading size={3} caps textColor="secondary" textFont="primary">
                    Angular
                  </Heading>
                </TableHeaderItem>
                <TableHeaderItem>
                  <Heading size={3} caps textColor="secondary" textFont="primary">
                    React
                  </Heading>
                </TableHeaderItem>
              </TableRow>
              </thead>
              <tbody>
              <TableRow>
                <TableItem>Regular DOM</TableItem>
                <TableItem>Virtual DOM</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>2 Way Binding</TableItem>
                <TableItem>Uni-Directional</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>HTML/Typescript files</TableItem>
                <TableItem>JSX</TableItem>
              </TableRow>
              </tbody>
            </Table>
          </Slide>
          <Slide transition={["spin"]} bgColor="black">
            <BlockQuote>
              <Quote textColor="tertiary">To read Angular: Learn a long list of Angular-specific syntax.</Quote>
            </BlockQuote>
            <BlockQuote>
              <Quote textColor="tertiary">To read React: Learn JavaScript.</Quote>
              <Cite textColor="primary">https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.ob9ekdpdf</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin"]} bgColor="black">
            <BlockQuote>
              <Quote textColor="tertiary">ngReact</Quote>
              <Cite textColor="secondary">https://github.com/ngReact/ngReact</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor={theme.bgColor}>
            <Heading size={3} textColor="secondary" textFont="primary">
              React getting started
            </Heading>
            <CodePane
              lang="html"
              source={require("raw!../assets/helloworld.html")}
              margin="20px auto"
              textSize="1rem"
            />
            <Link textColor="secondary" href="http://facebook.github.io/react/docs/getting-started.html">
              http://facebook.github.io/react/docs/getting-started.html
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor={theme.bgColor}>
            <Heading size={3} textColor="secondary" textFont="primary">
              React components
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/basic-react-component.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor={theme.bgColor}>
            <Heading size={3} textColor="secondary" textFont="primary">
              React props
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-props.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor={theme.bgColor}>
            <Heading size={3} textColor="secondary" textFont="primary">
              React states
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-click-count.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["spin"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              React states
            </Heading>
            <Interactive/>
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
