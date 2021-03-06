import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab } from './tabAction'

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        return (
            <li className={selected ? 'active' : ''}>
                <a href="javascript:void(0)"
                    data-toogle="tab"
                    data-target={this.props.target}
                    onClick={() => this.props.selectTab(this.props.target)}
                >
                    <i className={`fa -fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }    
})