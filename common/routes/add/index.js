import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './action'
import {Row, Col} from 'fit-layout'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'

import './index.scss'
import Table from 'fit-table'
import tableInfo from './table-info'
import Input from 'fit-input'
import Number from 'fit-number'
import Button from 'fit-button'

@connect(
    state => ({
        state: state.add
    }),
    dispatch => (
        bindActionCreators(actions, dispatch)
    )
)
@immutableRenderDecorator
export default class Counter extends Component {
    constructor(props) {
        super(props)
    }

    handleAddDataChange(field, value) {
        this.props.setAddData({field, value})
    }

    render() {
        const {setAddData, addDrug, state} = this.props

        return (
            <div className="_namespace">
                <div className="fields">
                    <Row>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'code')}
                                   label="产品编号"/>
                        </Col>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'name')}
                                   label="药品名称"/>
                        </Col>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'standard')}
                                   label="规格"/>
                        </Col>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'number')}
                                   label="数量"/>
                        </Col>
                    </Row>
                </div>

                <div className="fields">
                    <Row>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'create')}
                                   label="生产日期"/>
                        </Col>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'effectiveTime')}
                                   label="有效期"/>
                        </Col>
                        <Col span="6">
                            <Number onChange={this.handleAddDataChange.bind(this,'purchasePrice')}
                                    label="进价"/>
                        </Col>
                        <Col span="6">
                            <Number onChange={this.handleAddDataChange.bind(this,'price')}
                                    label="售价"/>
                        </Col>
                    </Row>
                </div>

                <div className="fields">
                    <Row>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'supplier')}
                                   label="供应商"/>
                        </Col>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'member')}
                                   label="采购员"/>
                        </Col>
                        <Col span="6">
                            <Input onChange={this.handleAddDataChange.bind(this,'factory')}
                                   label="仓库"/>
                        </Col>
                    </Row>
                </div>

                <div className="fields">
                    <Button type="primary"
                            onClick={addDrug.bind(this,state.get('addData').toJS())}>新增</Button>
                </div>

                <Table ref="table" {...tableInfo}/>
            </div>
        )
    }
}