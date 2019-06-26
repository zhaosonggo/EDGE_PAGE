window.onload = function()
{
	var myChart = echarts.init(document.getElementById('main'));
	myChart.setOption(createData());
}