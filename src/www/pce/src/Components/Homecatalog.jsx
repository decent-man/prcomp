import React from 'react'
import './Homecatalog.css'

export default class Section extends React.Component {

    render() {
        return (
            <div className="content">

                <div className="containerRow1">
                    
                    <div className="electronics">
                        <img src="/electronic-category.jpg" alt="error" />
                        <div className="catName">Electronics</div>
                    </div>    
                    
                    <div className="furniture">
                        <img src="/furniture-category.jpg" alt="error" />
                        <div className="catName">Furniture</div>                    
                    </div>

                    <div className="fashion">
                        <img src="/fashion-category.jpg" alt="error" />
                        <div className="catName">Fashion</div>
                    </div>

                    <div className="grocery">
                        <img src="/grocery-category.jfif" alt="error" />
                        <div className="catName">Grocery</div>
                    </div>

                </div>

                <div className="containerRow2">

                    <div className="stationary">
                        <img src="/stationary-category.jpg" alt="error" />
                        <div className="catName">Stationary</div>
                    </div>
                    
                    <div className="garden">  
                        <img src="/garden-category.jpg" alt="error" />
                        <div className="catName">Garden</div>
                    </div>
                    
                    <div className="toys">                    
                        <img src="/toys-category.jpg" alt="error" />
                        <div className="catName">Toys</div>
                    </div>
                    
                    <div className="books">
                        <img src="/books-category.jpg" alt="error" />
                        <div className="catName">Books</div>
                    </div>
                
                </div>

            </div>

        )
    }
}
