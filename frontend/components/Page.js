import {Meta, Header} from '.';

class Page extends React.Component {

  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }

}

export default Page;
