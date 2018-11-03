<template>
    <div class="Preview">
        <header><h1>{{ title }}</h1></header>
        <button @click="logi()">log</button>
        <div class="text_container" :style="perspective">
            <p :style="styleObject">{{p}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Preview',
    props: ["component_id"],
    data () {
      return {
        title: 'Welcome to Preview',
        font: this.$store.getters.get__font(this.component_id),
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci commodi corporis cum doloribus ea eligendi eos, labore, laudantium magnam maxime modi mollitia, nesciunt obcaecati officia optio porro quos repellat velit voluptatibus! Accusamus amet beatae consectetur corporis culpa debitis deleniti ea earum error ex facere fugit ipsum libero magnam molestias, neque nisi optio perspiciatis porro quidem quis quod repellat, velit vero vitae. Amet at, atque dolor eveniet harum necessitatibus odit sequi similique! Accusamus autem eum exercitationem explicabo facere in ipsam minus nihil nulla soluta! Corporis deserunt doloremque, enim libero magni obcaecati qui velit. A alias consectetur dolores facere ipsum iusto, magni nostrum veritatis vero voluptate? Consequatur, hic ipsa optio praesentium repellat rerum similique sunt voluptates! Amet eius inventore laudantium molestiae nam necessitatibus obcaecati, repudiandae sunt. Aliquam, asperiores cumque dolor dolorum eum ex, expedita illo iusto libero minus nulla placeat quasi reiciendis rem sapiente, soluta veniam? Accusantium adipisci asperiores cumque delectus deleniti dicta distinctio doloremque, ducimus eaque eius eos error est et exercitationem explicabo fugiat hic illo illum ipsam labore minus molestiae mollitia necessitatibus nostrum odio officiis omnis optio praesentium quam quod reiciendis, reprehenderit repudiandae soluta sunt temporibus ullam, vitae! Autem facilis itaque quaerat quam quibusdam quidem quo sit, veritatis. A alias aliquid animi at cum doloremque dolores ducimus et eum expedita fuga impedit iure laboriosam magnam minima minus modi non placeat reiciendis sed tempora unde, ut vel velit veniam vero voluptatibus! A doloremque dolores eos exercitationem facere facilis impedit in ipsa, ipsam labore laboriosam laborum magni molestias natus nemo quaerat rem vero voluptates. Architecto distinctio esse expedita, facilis fugit hic id labore, nam neque nesciunt, nobis officia praesentium repellendus sequi sint tempore veniam. Atque aut, earum esse eum ex fuga in inventore numquam omnis quia ratione recusandae, ut. Aperiam architecto assumenda atque beatae commodi corporis cupiditate deleniti earum enim eveniet ex facere fugit harum impedit iste itaque labore magnam officia praesentium quia quis quo reprehenderit, rerum soluta temporibus voluptas voluptatibus. Animi autem consectetur consequatur deserunt ducimus earum eius, esse eum excepturi fuga hic illum incidunt libero magnam minus nam nihil, possimus quidem quo repudiandae saepe suscipit veniam voluptates. Accusantium adipisci alias architecto assumenda at beatae consequatur dolor dolorum ea enim error eveniet fuga fugit hic incidunt ipsum iure laboriosam laborum, molestiae neque nihil nisi nobis omnis perspiciatis quae quaerat quia rerum saepe soluta voluptatem? Ab alias commodi, delectus eveniet fugit ipsam natus nesciunt pariatur quod recusandae reiciendis similique sint suscipit totam ut. Asperiores assumenda dolor dolorem, doloremque harum libero modi officia sit veniam vitae! Assumenda culpa dignissimos, explicabo facilis laudantium nesciunt nobis quae quos repellat voluptatum? Aliquid blanditiis cum dolorum fuga itaque nesciunt nisi non, quas? Asperiores exercitationem illo ipsum omnis optio provident. Animi, autem earum labore minus necessitatibus nihil quos sapiente vero voluptatem voluptatibus? At atque corporis delectus dignissimos doloremque, eaque exercitationem explicabo harum ipsum iure libero maxime minima nulla possimus quia rem, totam? Ab accusamus aspernatur aut consequuntur distinctio doloremque enim eos esse, impedit in incidunt molestiae, numquam odio odit optio placeat porro quidem quis quisquam repellat saepe sequi temporibus ullam unde vitae. Ab aliquam aspernatur assumenda, atque consequuntur dicta ducimus eligendi et illum in itaque labore libero minus nam necessitatibus nihil nisi obcaecati officiis praesentium quae quaerat quisquam reiciendis rem repellendus sapiente sed sit? A accusantium adipisci alias aliquam asperiores, autem consequatur cumque delectus dicta dolorum eos error, exercitationem incidunt itaque labore laboriosam magnam magni molestiae nam nemo nulla obcaecati omnis possimus provident quibusdam quod reiciendis repellendus saepe sapiente sequi sint soluta sunt suscipit tempore unde ut velit? Accusantium alias cupiditate qui soluta. Expedita laudantium minima necessitatibus. Amet aut ducimus, incidunt iste itaque iusto libero molestias nam nemo nihil odit porro quasi quos rem velit voluptates voluptatibus. Adipisci atque eligendi expedita incidunt nesciunt, quae quidem recusandae voluptas. Dolore eaque eos error esse fugiat fugit ipsum iure nesciunt quaerat quo, sequi sit voluptate, voluptatibus? Animi dicta illo iure laudantium, magnam minima omnis repellat soluta? Aperiam architecto impedit nulla quaerat quisquam! Aliquam aliquid aspernatur aut blanditiis eos itaque, nesciunt temporibus vel. A aliquam aperiam assumenda aut corporis cum cupiditate doloremque error excepturi exercitationem id illo ipsa, ipsum iste magnam nihil nobis numquam odit, perspiciatis rem reprehenderit rerum, sed sit soluta vel velit voluptate. Corporis cumque deserunt distinctio dolorum maiores minima nam reiciendis sapiente tempore voluptate? Aliquam animi dolore sunt. A architecto dignissimos minima minus neque officia quidem quod ratione suscipit! A dignissimos earum eum excepturi facilis ipsum libero minus, modi nihil nisi officia omnis pariatur praesentium similique voluptatem. Beatae blanditiis, culpa, cumque error fugit in ipsum nesciunt numquam qui quibusdam voluptatem voluptates? A accusantium, amet asperiores atque aut cumque dolorem eveniet explicabo fugit illo laborum nisi pariatur quisquam ratione reiciendis sit, temporibus totam, velit? Accusamus architecto asperiores at consequuntur culpa deleniti distinctio doloribus ducimus eum fugiat id, illo ipsa libero natus nesciunt vel voluptates. Assumenda corporis culpa, dicta ducimus fugit ipsa ipsam laborum molestiae nostrum quidem reiciendis repellat. Accusamus adipisci alias blanditiis commodi consectetur consequatur corporis cupiditate delectus eaque esse est et illum ipsa, iste modi necessitatibus odio placeat possimus quia quo rerum sint tempora temporibus veritatis voluptas! Amet laboriosam minima quaerat tempore vel? Accusamus consectetur eligendi est, eveniet iste itaque nisi nostrum quam quidem, sapiente voluptatem voluptatibus. A ab amet consequatur cupiditate dignissimos facere, illum maiores officia officiis omnis quasi qui soluta vel! Animi cumque distinctio dolor ea, facere minus obcaecati quae similique vel! Doloremque eius id magni praesentium. Consequatur culpa magni nisi provident rem sit? Beatae consequatur cumque deserunt eaque eligendi est excepturi, ipsum laudantium mollitia nisi perspiciatis quia sed voluptatem? Consequuntur deserunt dolore mollitia odit similique tenetur? Consectetur maiores molestiae perferendis qui. Consectetur culpa cumque cupiditate illo. A ab accusamus ad amet aspernatur atque autem cum distinctio dolore dolorum ducimus eaque enim esse excepturi fugiat impedit in inventore laborum magni minus mollitia necessitatibus, nulla numquam odio officiis perferendis quam quisquam quod quos reiciendis rem repellendus repudiandae similique sunt voluptas voluptate voluptatum. Alias corporis eaque iusto minus quas, quidem quo sit tempora? Ad alias aliquam blanditiis debitis esse expedita, explicabo optio qui quos repudiandae, sit suscipit vel.'
      }
    },
    computed: {
      styleObject () {
        let styleObj = {
          transitionDuration: '0.5s',
          fontSize: this.font.fontSize.current + this.font.px.value,
          color: this.font.color.current,
          fontFamily: this.font.fontFamily.value,

//          textAlign: this.position.pos,
//
//          backgroundColor: this.background.color.current,
//          backgroundImage: 'url(' + this.background.url + ')',
//          backgroundRepeat: this.background.repeat,
//          backgroundSize: this.background.size.value,
//          backgroundAttachment: this.background.attachment,
//
//          lineHeight: this.interval.line.current,
//          letterSpacing: this.interval.letter.current + 'px',
//          wordSpacing: this.interval.word.current + 'px',
//
//          transformStyle: 'preserve-3d',
//
//          transform: this.transform.rotation.preview +
//          this.transform.scaling.preview +
//          this.transform.skewing.preview +
//          this.transform.translation.preview +
//          this.transform.matrix.preview
        }
        if (this.font.fontWeight) {
          styleObj.fontWeight = this.font.fontWeight
        }
        if (this.font.fontStyle) {
          styleObj.fontStyle = this.font.fontStyle
        }
        if (this.font.transform !== 'none') {
          styleObj.textTransform = this.font.transform
        }
        if (this.font.textDecoration.length) {
          styleObj.textDecoration = this.font.textDecoration.join(' ')
        }
//        if (this.interval.line.px.value !== 'none') {
//          styleObj.lineHeight = this.interval.line.current + this.interval.line.px.value
//        }
//        if (this.shadow.disabled) {
//          styleObj.textShadow = this.shadow.x.current + 'px ' + this.shadow.y.current + 'px ' + this.shadow.blur.current + 'px ' + this.shadow.color.current
//        }
//        this.preview = styleObj;
        return styleObj
      },
      perspective () {
        return {
//          '-webkit-perspective': +this.transform.perspective.value+'px'
        }
      }
    },
    methods: {
      logi: function () {
        console.log(this.$store.getters.get__font(this.component_id))
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<!--:class="{-->
<!--bold: font.bold,-->
<!--strike: font.strike && !font.underline,-->
<!--underline: !font.strike && font.underline,-->
<!--strikeUnderline: font.strike && font.underline,-->
<!--italic: font.italic,-->
<!--[position]: true-->
<!--}"-->
