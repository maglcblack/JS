
    	var PlayLeft = $(".stui-player__left");
    	var PlaySide = $(".stui-player__side")
		var LeftHeight = PlayLeft.outerHeight();
		var BoxHeight = parseInt(LeftHeight)-51;
		var Position = $(".stui-play__list li.active").position().top;				
		var PositionBox = parseInt(Position)-100;		
		if(!stui.browser.useragent.mobile){	
			PlaySide.css("height",LeftHeight);
			$("#play-box").find(".item").css({"height":BoxHeight,"overflow":"auto"}).scrollTop(PositionBox);	
		}
        var nativeShare = new NativeShare()
        var shareData = {
            fail: function() {
                alert('分享失败')
            }
        }
        nativeShare.setShareData(shareData)

        function call(command) {
            try {
                nativeShare.call(command)
            } catch (err) {
                // 如果不支持，你可以在这里做降级处理
                alert(err.message)
            }
        }

        function setTitle(title) {
            nativeShare.setShareData({
                title: title,
            })
        }