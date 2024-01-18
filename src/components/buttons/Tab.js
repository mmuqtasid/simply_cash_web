import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabitems from '../tabitems/Tabitems';
import TabitemsCake from '../tabitems/TabitemsCake';
import TabitemsDrinks from '../tabitems/TabitemsDrinks';
import TabitemsIce from '../tabitems/TabitemsIce';
import TabitemsGro from '../tabitems/TabitemsGro';
import TabitemsMisc from '../tabitems/TabitemsMisc';
import './tab.css';

const Tab = ({}) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
            href="#"
          >
            Food
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
            href="#"
          >
            Cake
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
            href="#"
          >
            Drinks
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab4')}
            href="#"
          >
           Ice Cream
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab5' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab5')}
            href="#"
          >
           Grocery
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab6' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab6')}
            href="#"
          >
            Misc.
          </a>
        </li>
      </ul>

      <div className="tab-content mt-3">
        <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`}>
        
          <Tabitems /> 
        </div>
        <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`}>
       
          <TabitemsCake /> 
        </div>
        <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`}>
         
          <TabitemsDrinks /> 
        </div>
        <div className={`tab-pane fade ${activeTab === 'tab4' ? 'show active' : ''}`}>
        
          <TabitemsIce /> 
        </div>
        <div className={`tab-pane fade ${activeTab === 'tab5' ? 'show active' : ''}`}>
        
          <TabitemsGro /> 
        </div>
        <div className={`tab-pane fade ${activeTab === 'tab6' ? 'show active' : ''}`}>
       
          <TabitemsMisc /> 
        </div>
      </div>
    </div>
  );
};

export default Tab;
