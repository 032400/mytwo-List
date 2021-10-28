import request from './request'

// 请求首页的数据
export const GetHomeData = () => request.get('/index/index')

// 获取pupup的数据
export const GetPopupData = () => request.get('/search/index')

// 搜索框商品搜索
export const GetSearchData = (params) => request.get('/goods/list', {params})

// 实时搜索功能
export const GetTimeData = (params) => request.get('/search/helper', {params})

// 清除历史记录
export const ClearHistory = () => request.post('/search/clearhistory')

// 登录接口
export const GoLogin = (params) => request.post('/auth/loginByWeb', params);

// 产品明细
export const GetGoodsDetail = (params) => request.get('/goods/detail', {params})

// 相关产品
export const GetGoodsRelated = (params) => request.get('/goods/related', {params})

// 获取购物车产品数量
export const GetCartSum = () => request.get('/cart/goodscount')

// 加入购物车
export const AddToCart = (params) => request.post('/cart/add',params)

// 获取购物车数据（含完成编辑）
export const GetCartData = () => request.get('/cart/index')

// 点击切换商品选中状态(含全选)
export const GoodsChecked = (params) => request.post('/cart/checked',params)

// 商品步进器
export const StepNum = (params) => request.post('/cart/update',params)

// 商品删除
export const DelGoods = (params) => request.post('/cart/delete',params)

// 专题页
export const GetTopic = (params) => request.get('/topic/list', { params })

// 全部分类数据接口
export const GetChannelData = () => request.get('/catalog/index')

// 获取当前分类数据
export const GetFenleiData = (params) => request.get('/catalog/current', { params })

// 分类数据获取
export const GetCateGoryData = (params) => request.get('/goods/category', { params })

// 分类页面商品列表请求
export const GetCateGoryList = (params) => request.get('/goods/list', { params })

// 品牌详情
export const GetBrandDetail = (params) => request.get('/brand/detail', { params })