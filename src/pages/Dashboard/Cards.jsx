import React, { Component } from 'react'
import { Card, Icon } from "antd"

export default class cards extends Component {
	render() {
		return (
			<div className="cards flex wrap j-around">
				<Card className="__item">
					<div className="__content flex">
						<Icon className="img" type="heart" />
						<div className="t">
							<div >收藏</div>
							<div className="b">756</div>
						</div>
					</div>
				</Card>
				<Card className="__item">
					<div className="__content flex">
						<Icon className="img" type="like" />
						<div className="t">
							<div>点赞</div>
							<div className="b">964</div>
						</div>
					</div>
				</Card>
				<Card className="__item">
					<div className="__content flex">
						<Icon className="img" type="team" />
						<div className="t">
							<div>粉丝</div>
							<div className="b">454</div>
						</div>
					</div>
				</Card>
				<Card className="__item">
					<div className="__content flex">
						<Icon className="img" type="share-alt" />
						<div className="t">
							<div>转发</div>
							<div className="b">1564</div>
						</div>
					</div>
				</Card>
			</div>
		)
	}
}
