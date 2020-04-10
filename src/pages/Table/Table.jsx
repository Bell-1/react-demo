import React, { Component, cloneElement } from 'react'
import { Table, Icon, Input, Form, Row, Button } from 'antd';
import Condition from './Condition'
import CreateModal from './Create'
import http from '@/utils/http'

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
			const res = await http.request('userList', { ...conditions, page: current, pageSize });
			this.setState({
				list: res.list,
				total: res.totalPage,
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
	genderRender(text, record, index){
return text === 1 ? '男' : '女';
	}
	render() {
		const { list, createShow, current, total, pageSize } = this.state;
		const columns = [
			{ title: '名称', dataIndex: 'name', key: 'name' },
			{ title: '手机', dataIndex: 'phone', key: 'phone' },
			{ title: '邮箱', dataIndex: 'email', key: 'email' },
			{ title: '性别', dataIndex: 'gender', key: 'gender', render: this.genderRender },
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



















