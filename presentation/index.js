import React from "react";

import {
  Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text, S
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";
import InteractiveSvg from "../assets/interactive-svg";

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
          <Slide transition={["spin"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              React refs
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-refs.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["spin"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              React nesting / components
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-nesting.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["spin"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              React nesting / children
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-nesting2.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["spin"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              React SVG
            </Heading>
            <InteractiveSvg/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              Component lifecycle
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-lifecycle.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              Babel CLI
            </Heading>
            <CodePane
              source={require("raw!../assets/babel-cli.txt")}
              margin="20px auto"
              textSize="1.4rem"
            />
          </Slide>
          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading size={3} textColor="primary" textFont="primary">
              React Dev Tools
            </Heading>
            <img src="/devtools-full.gif"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              Mane Reacta
            </Heading>
            <List textColor={color.textColor}>
              <ListItem>Previše mogućnosti buildanja vodi do nejasnoća (Gulp, Grunt, Webpack)</ListItem>
              <ListItem>Kod kompleksnijih komponenti, potrebna je neka standardizacija (Flux, Redux,...)</ListItem>
              <ListItem>Za konkretni posao je potrebno koristiti 3rd party libove</ListItem>
              <ListItem>Problemi JavaScripta se vide u Reactu</ListItem>
            </List>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/javascript-issue")}
                margin="20px auto"
                textSize="1rem"
              />
            </Appear>
          </Slide>
          <Slide transition={["spin"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              Mane Reacta
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react-state-problem.jsx")}
              margin="20px auto"
              textSize="1rem"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              Kada koristiti React?
            </Heading>
            <List textColor={color.textColor}>
              <ListItem>kod izrade manjih komponenta s točno definiranom funkcionalnošću</ListItem>
              <ListItem>kod izrade kompleksnih i specijaliziranih sučelja</ListItem>
              <ListItem>kada je potrebno često i brzo mijenjati prikaz podataka</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              Gotove React komponente
            </Heading>
            <List textColor={color.textColor}>
              <ListItem><Link href="https://react-bootstrap.github.io" target="_blank" textColor="tertiary">React-Bootstrap</Link></ListItem>
              <ListItem><Link href="http://react-toolbox.com" target="_blank" textColor="tertiary">React-Toolbox</Link></ListItem>
              <ListItem><Link href="http://www.material-ui.com" target="_blank" textColor="tertiary">Material-UI</Link></ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} textColor="tertiary" textFont="primary">
              Gdje se React već koristi?
            </Heading>
            <List textColor={color.textColor}>
              <ListItem>Facebook & Facebook Comment Box</ListItem>
              <ListItem>Instagram</ListItem>
              <ListItem>WhatsApp Web</ListItem>
              <ListItem>Messenger.com</ListItem>
              <ListItem><Link href="http://getonepager.com/?onepager=1&guest=1" target="_blank" textColor="tertiary">Onepager.com</Link></ListItem>
              <ListItem><Link href="http://beta.speedtalk.com.au/#call-rates" target="_blank" textColor="tertiary">SpeedTalk.com.au</Link></ListItem>
            </List>
          </Slide>
          <Slide transition={["slide", "zoom"]} bgColor="primary">
            <Heading size={3} textColor="secondary">
              Hvala
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
