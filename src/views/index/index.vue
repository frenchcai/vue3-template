<template>
    <div class="introducePage">
        <div>Hello world</div>
    </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.introducePage {
    width: 750px;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 24px;
    background-color: #F5F5F5;
    .imgBox {
        margin: 12px auto;
        width: 100px;
        height: 100px;
    }

    .img {
        width: 100%;
        height: 100%;
    }

    .t1 {
        font-size: 30px;
    }

    .t2 {
        font-size: 30px;
    }

    .t3 {
        font-size: 34px;
        margin-bottom: 12px;
    }

    .t4 {
        font-size: 34px;
        margin: 24px 0 12px;
    }

    .t5 {

        font-size: 32px;
    }

    .mainBox {
        border-radius: 32px;
        margin: 32px 0;
        padding: 24px;
        background-color: white;
    }

    .unionList {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        .unionItem {
            width: 212px;

            &:nth-child(n+3) {
                margin-top: 24px;
            }

            .logo {
                margin: auto;
                width: 120px;
                height: 120px;
                background-color: aqua;
                border-radius: 120px;
                overflow: hidden;
            }

            .name {
                font-size: 32px;
                text-align: center;
            }
        }
    }

    .equity {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .equityItem {
            padding: 32px 24px;
            display: flex;

            .icon {
                width: 56px;
                height: 56px;
                background-color: azure;
                margin-right: 12px;
            }
        }

    }

    .dialog {
        & /deep/ .vg-dialog_title {
            font-size: 32px;
        }
        & /deep/ .vg-dialog_close{
            font-size: 32px;
        }

        .unionLogo{
            width: 200px;
            height: 200px;
            border-radius: 200px;
            overflow: hidden;
            margin: auto;
        }
        .center{
            text-align: center;
        }
        .phone{
            font-size: 30px;
        }
        .ctext{
            margin:32px 0 32px;
            font-size: 26px;
        }
        .agree{
            display: flex;
            align-items: center;
            font-size: 22px;
            .at{
                margin:0 6px 0 6px;
            }
        }
        .btn{
            margin-top: 32px;
        }
        .checkbox{
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 16px;
            overflow:hidden;
            background-color: white;
            border: 1px solid #333;
            padding: 3px;
            .inner{
                width: 100%;
                height: 100%;
                border-radius: 100%;
            }
        }
        .active{
            background-color: #007bff;
        }

    }

}
</style>
<script setup>

</script>