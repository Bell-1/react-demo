import React, { Component, cloneElement } from 'react'
import { Table, Icon, Input, Form, Row, Button } from 'antd';
import Condition from './Condition'
import CreateModal from './Create'
import http from '@utils/http'

export default class TableComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			createShow: false,
			conditions: {},
			current: 1,
			total: 0,
			pageSize: 20,
			list: [],
		}
	}
	componentDidMount() {
		this.testQuery();
	}
	showCreate = () => {
		this.setState({
			createShow: true,
		})
	}
	hideCreate = () => {
		this.setState({
			createShow: false,
		})
	}
	createSuccess = () => {
		this.hideCreate();
		this.testQuery();
	}
	testQuery = async () => {
		try {
			const { conditions, current, pageSize } = this.state;
			const res = await http.request('testQuery', { ...conditions, current, pageSize });
			this.setState({
				list: res.list,
				total: res.total,
			})
		} catch (error) {

		}
	}
	changeCondition = (conditions) => {
		this.setState({ conditions, current: 1 });
		this.testQuery();
	}
	paginationChange = (current) => {
		this.setState({ current }, ()=>{
			this.testQuery();
		});
	}
	render() {
		const { list, createShow, current, total, pageSize } = this.state;
		const columns = [
			{ title: 'test1', dataIndex: 'test1', key: 'test1' },
			{ title: 'test2', dataIndex: 'test2', key: 'test2' },
			{ title: 'test3', dataIndex: 'test3', key: 'test3' },
			{ title: 'test4', dataIndex: 'test4', key: 'test4' },
		]
		const pagination = {
			pageSize,
			current,
			total,
			onChange: this.paginationChange,
		}
		return (
			<div className="Table">
				<Row className="create-row">
					<Button type="primary" onClick={this.showCreate}>创建</Button>
				</Row>
				<Condition confirm={this.changeCondition}></Condition>
				<Table columns={columns} dataSource={list} pagination={pagination} />
				<CreateModal visible={createShow} confirm={this.createSuccess} cancel={this.hideCreate}></CreateModal>
			</div >
		)
	}
}



















