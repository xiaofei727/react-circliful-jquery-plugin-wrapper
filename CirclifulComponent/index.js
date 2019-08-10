import React from 'react';
import $ from 'jquery';
import circliful from 'jquery-circliful';

import './styles.scss';
import '../../../node_modules/jquery-circliful/css/jquery.circliful.css';

class CirclifulComponent extends React.Component {

    componentDidMount() {
        this.$el = $(this.el);
        //this.$el.somePlugin();

        this.$el.circliful({
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 10,
            foregroundColor: "#00FF19",
            backgroundColor: "#00ff1966",
            fontColor: '#fff',
            percent: this.props.percent,
            percentageY: 200,
            percentageTextSize: 35,
            strokeLinecap: 'round' ,
            text: 'Retirement Score',
            textAdditionalCss: 'color:red',
            textY: '60px',
            textX: '100',
            textStyle: 'font-size: 9px;',
            textColor: '#ddd',
//            targetPercent: 52,
//            targetColor: 'transparent',
            noPercentageSign: true,
            pointSize: 10,
        });


        this.$el.find('svg > text:first-child').attr('y', 85);
        this.$el.find('svg > text:last-child').attr('y', 125);
    }
  
    componentWillUnmount() {
      this.$el.circliful('destroy');
    }
  
    render() {
      return <div ref={el => this.el = el} />;
    }
}

export default CirclifulComponent;
