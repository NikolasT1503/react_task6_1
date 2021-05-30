import React from "react";

export class MyList extends React.Component {
  list = ["1", "2", "5", "Николай", "Станислав", "3", "4", "Александр"];

  constructor(props) {
    super(props);
    this.state = {
      found: false,
      listItems: this.list.sort().concat() 
    };
    this.handlerChange = this.handlerChange.bind(this);
  }


  renderList(list) {
    return (
      <ul>
        {list.map((item) => (
          <li key={item.toString()}>{item}</li>
        ))}
      </ul>
    );
  }

  handlerChange(e) {
    this.setState({
      found: this.list.indexOf(e.target.value) > -1,
      listItems: this.list.filter((el) => el.includes(e.target.value)).sort()
    });
  }

/*   handlerClick = {()=>{

  }
}
 */
  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChange} />
        <p>{this.state.found ? "Найдено" : "Не найдено"}</p>
        {this.renderList(this.state.listItems)}
      </div>
    );
  }
}

export default MyList;
