$('#logout').on('click', function() {
    var isConfirm = confirm('你真的要退出吗？')
    if (isConfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function(res) {
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
})