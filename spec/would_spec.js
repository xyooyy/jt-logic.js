describe('Logic Would',function(){

    function condition_is_true(){
        return true;
    }

    function condition_is_false() {
        return false;
    }

    beforeEach(function(){
        called_flag = false;
    })

    it("should do when only call would",function(){
      would(be_called)();
      expect(called_flag).toBe(true);

    });

    it("should do when given condition is true",function(){
        would(be_called)
            .when(condition_is_true).pass();
        expect(called_flag).toBe(true);

    });

    it("should not do when given condition is false",function(){
        would(be_called)
            .when(condition_is_false).pass();
        expect(called_flag).toBe(false);

    });
})

//pass_handler
//