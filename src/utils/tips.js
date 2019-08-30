import { notification, message } from 'antd'

/**
 * 通知框
 * @param {*} param0 
 */
export function notify({ title = '', content = '', duration = 3000, placement = 'bottomRight', }) {
	return new Promise((resolve, reject) => {
		notification.open({
			message: title,
			description: content,
			duration: duration,
			placement: placement,
			onClick: () => {
				resolve();
			},
			onClose: () => {

			}
		});
	})
}
