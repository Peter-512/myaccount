import React from 'react';

class Navbar extends React.Component {
    render() {
      
      //consider changing these to lists of objects for when they need to link somewhere: 
      //[{content: Profile, link: source}, {content: Addresses, link source}, etc.]
      const data = ["Profile",
                    "Addresses",
                    "Payment Methods"
                   ]
      const purchases = ["Orders",
                         "Returns",
                         "Receipts & credits"
                        ]
      const products = ["Project lists",
                        "Quotations",
                        "Comparisons",
                        "Suggestions"
                       ]
      const services = ["Newsletter management",
                        "Business Card",
                        "FAQ",
                        "Help"
                       ]
      const dataItems = []
      const purchasesItems = []
      const productsItems = []
      const servicesItems = []
      for (const [index, value] of data.entries()) {
          // eslint-disable-next-line
      dataItems.push(<a className="link"><li key={index.toString()}><i className="fas fa-chevron-right icon-forward-animation"></i> {value}</li></a>)
    }
      for (const [index, value] of purchases.entries()) {
          // eslint-disable-next-line
      purchasesItems.push(<a className="link"><li key={(index+3).toString()}><i className="fas fa-chevron-right icon-forward-animation"></i> {value}</li></a>)
    }
      for (const [index, value] of products.entries()) {
          // eslint-disable-next-line
      productsItems.push(<a className="link"><li key={(index+6).toString()}><i className="fas fa-chevron-right icon-forward-animation"></i> {value}</li></a>)
    }
      for (const [index, value] of services.entries()) {
          // eslint-disable-next-line
      servicesItems.push(<a className="link"><li key={(index+10).toString()}><i className="fas fa-chevron-right icon-forward-animation"></i> {value}</li></a>)
    }
      return (
        <nav id="navbar">
        <div id="nav-container">
          <header>My Account</header>
          <ul>
            {/* // eslint-disable-next-line */}
            <a className="link"><li><i className="fas fa-chevron-right icon-forward-animation"></i> Dashboard</li></a>
            <li key={"data"} className="nav-header"><div>Data</div></li>
            {dataItems}
            <li key={"purchases"} className="nav-header"><div>Purchases</div></li>
            {purchasesItems}
            <li key={"products"} className="nav-header"><div>Products</div></li>
            {productsItems}
            <li key={"services"} className="nav-header"><div>Services</div></li>
            {servicesItems}
          </ul>
        </div>
      </nav>
      );
    }
  }
  
  export default Navbar