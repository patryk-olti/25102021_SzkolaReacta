import React, { useState } from "react";

import RestaurantForm from "../Containers/utilis/RestaurantForm";
import Text from "../Components/utilis/Text";

const Restaurant = () => {

    const [ totalPrice, setTotalPrice ] = useState(0);

    const visibleElement = totalPrice !== 0 ? <Text text={totalPrice} /> : <RestaurantForm handleSubmit={setTotalPrice} />;
  
    return (
      <div className="App">
          {visibleElement}
      </div>
    );
}

export default Restaurant;