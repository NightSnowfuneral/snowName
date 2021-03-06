const config={
	apiUrl:{
		path:'https://mp.jlzhang.net/',
		exist:'search/user_exist',
		appId:'wxappid',
		signature:'wxsignature',
		uar:'search/uar',
		verification:'yzm',
		msg:'user',
		commonData:'search/record',
		typein:'record',
		task:'record',
		search:'search/records',
		station:'search/station',
		mansion:'resource',
		organization:'organization',
		privileges:'privileges',
		role:'role',
		roles:'roles',
		menu:'menu',
		user:'search/user',
		tasks:'tasks',
		taskstoday:'tasks/today',
		resources:'resources',
		searchResource:'search/resource',
		patrolHistory:'records/by_station',
		checkList:'checkList',
		circuit:'line',
		searchCircuit:'search/line',
		checkListS:'check_list',
		checkReport:'check_reports',
		record:'record'
	},
	reg:{
		phone:/^1[3|4|5|7|8][0-9]{9}$/,
		trim:/\s+/g
	},
}
export default config