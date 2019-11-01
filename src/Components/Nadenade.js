import React from "react";

export class Nadenade extends React.Component {
  constructor(props) {
    super(props);
    this.state = { push: 0 };
  }
  Nadenade(push) {
    if (1 <= push) {
      return "number";
    }
    return "zero";
  }

  render() {
    const { push } = this.state;
    const handImage =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///9LS0tISEg7Ozs+Pj7Hx8fExMRjY2NCQkLy8vKlpaVfX19qamrZ2dlFRUU6Ojq9vb01NTVPT0/Q0NDs7Oy2trZ+fn5UVFSenp7j4+PT09Ovr6/4+PiYmJhZWVnh4eGMjIyEhIR2dnZ4eHgsLCy5xpoMAAALf0lEQVR4nO1da7uyKhBNoMQ00MwuOyur9///xmPtSzFctASV87Q+bq3NCpgZhrlMJkMg+tpX4Wa53ITVPo8GGYJLlPsEY8pQUAMxinGy/1+RXFUZvZN7ANHsvBLeydNivy9mu3KoUb6PsuI0UIDhw88bUXpFHBNKKSGcxYfFoON9GVOm5HcDDfL6hfySESZML9/4tIa3GdIRrMlk80XMmfx3ire+rNYz1vO7TyPW/AA0+Bp67K2QaFdoI1B2aP7+wbF+n2ANkgw9/kZsG5ZoE9hm5AInz7oRvFEcmoMRJTJI0bYUw6FZmFB12oQ/oNXQNPRYccWAEXp1YrPp0ES0qCRFjjDdJMlRqwKVQGisqr+UxAxP8vtgy2miml4d6HZoKhrswS5EbPZ4OINHjRr1mepmfcsP8EgnMRGHipaCalsFgAnL1kV+Wsy2gaRD6XwoDkZEYCHSlfh8R4THvPqbqBmDG5j1PXgjVovF4rSbTL7EqeAz+GLxTBE/C8wSGrN8LDb4Kj1vMo4x5jw7iosUKRT38fEGPomPEnEWWdXL+Jswu2DC/gYNtB6RpvB5EnkKHgFrCI3BdisQls+xD1CFBf1nESD5CJGKa5zND9cwDNeH4msgufq1JEYlrp6EvylUuGWW4vdRxmpjiFGKSVIMcN44mBwVd4ZK+zn+/hRaKp7NtTYtIvx8UnzCIaKQ6EZjZhh+M2RnxbPcdLKsdWef87hCpg3YgqFSoSvN9ieOpHBM62koCjPLAkNoMEjgqpl3gXLZ5pzwBsNG/wc99iNWL81L1BHDgAV9bMZ5O1eTE4YB27ifxV3Lc54bhgFz721st0adMQyI68Pxl8JbWNsdlELirhgGmWPdL08hoZftvphfmWgEOGOIYqcEpV3I8P5n75eFeF9mg6FSLWF4LLGKLbAdafIkvsvL09PODBnmy2PAiey+Uxm11gDt/6v4+OlWpiNDxM/30IZoeuVwJrFDdyowHdERvhA/zsOdGJLw4eM5bcDCYRd7jCBS4EuSxNruT9R2Ykgq4ckVUMzcqX1xG7K1/Mb5d9t0YUihiR2Km1HlILGEq/CfcC6/8edv68BQFiWROIkO3VShsOlVjunydywdGHJZkojedIcq8fjMUJYzN2xQV4bK7wWaxNlGjAWGyl8y7MxQeS0j7g++UrxiBS0YJp0ZEpW6E91UshC3hV4YYlUAmKinVDLODoZjOBMYKqfZCj4MJx+GH4Yfhh+GnfFhOPkw/DD8MPww7IwPw8mH4Yfhh+GHYWd8GE4+DD8MPwwtMDxNi/l8vp+qncq+M9zNk4zfco8pJTyL5zJLvxmmMRdiDhHlxzm44/GZYYEUQc01STH52F+Gu1ibfMyeo1e8Zbg3BW3zp9t6XxmuzeFWdLnznGFjdjnCvyk6fjJskz7/GzvgJcN2mbtZ7i3DomXIb7bwlGFDjsMTnXsak4cMk5Yxzbcol9JHhrMX0o/pxUeGG1nTM4I5VyUfB3jvH8OpnGFMq9lit5seVLl32S70jSHIvQ5Q9jC0Czl7C4W+zWEEMgvQwzyrUcrGHEhkHT9DIbX6VyE8YWuWQx4wPIvrUM5cnRspesBQlKSqwNuDKVV0/AxBfkOmSnyDMeR+MTwJa1CRP36DQmP6wzAXPqQpmLLT130aP0PwIU020V67Fb1jqMthgGaBRwyn4od0ueDapNHxMxSLrVBtPT+Yr+YPQ/H0qx7RHZrs9PEzLEWTRp8ulavX6fgZghwfoo/wV2c3e8DwIGww/UbUKEVNzgwnd2BlzlCM7w8zlfKN/n1/8p89hqIwNVX1Uboc1Qyn6Q+U2mf281BFoiy+nymL0Vg5HxpSbaL2DB3hzTO+uBFNNdLmCsvGB4ZiupSx+JRC1vjAcCGqgcyQ81bIk+gDw0nQepkqjlFeMBSrcRqHnMp+KR8YguJTqhpjf5Am0QuGE1ELGJS+YhL9YAiKxlLTu9AA94MhWKbG7FNQUMEThhNxXpSV4v4AJtEThqL1HRBTojvYiZ4wBEpf54/6hihOPWEolknQeU1//w33kSGoOMl3ppdb3K45QgeGIFbBXElbqPTlC0NwhEKB8eXn8hTeMASnBnNBhuejsDcMS5GhqnDQE1LuH0N4UUrM5SUffjd/GH4BWbM3vv2oSu0Pw8lrlbQXmX8MoUpsKPg+zbxjCFSi2fye3CjeJ91s/1hGxzjvy0uypt6591qeUuF4l+jIUPx4k6ypEa05ycxqxTK6ZiOIG7FNccko7bc9Q1eG29dkzQDonFECZE2vC7AVOmcFgXAEdxXf3kVnhjPRQTG+RjbdM7vAzcu4GtlMbDAEssZlIdu30J0hrJ87tkaLFjIsgV2TGf01/cMCQxBSMrYOfTayZMHdktE33D9sMARt4UijcdorbDAsgawZQ0upB6xkq8PAdmdVUN+BFYbgCsNl5fPXYafiQAiM0zEpDDsMwRWo8c67b1iqiwEuecfUKtMSw+14FYYlhitwyTsihWGrest6tArDFsPFaE8YqSWG4iWv+85D7WGtJjvwnDa6v3uDaDXjDs5A0C4VD9AeUwlRzHcxRsAtzWgaZIvhabzDDw/bLI7lmCi6IGiXUYFYvrFofeF83q2n1QkoDHNsRm8Q0goMGUxtANzfPfY3NUC8duh465CPcRLF5Jeu8u84wkkURbw5vrAZMFJ2DB7+i/Crd26kA+4wxnBNI46oc981mNzceK/vHCCxXpkW9xKA6Ta8/7sQO9p1Hw+cxMGPGGLHLhuyDyTjDX5OBGmEFpyAcBLdNjdtBOwrb+M7YfYIsfGlb0O0le3EUcAUoGGFjfh7WzJBgGHzW1ZwELyQJvkCYA7+kOYpyCHsrg2/AXPwB1ynIBLGlttBysEfbJ3CFr2mJMmXAAt+IDSQQwOkS1jsWQ01xkDRbkDO2LwRy+E65YOcFMFNg1UL8gyT8N01ONUDhE3aDS4vpczfZf9bce3U95fCwjT93+0vwFaxfWt7heuU9H3znTg+qoKcqNtG7/eUAe1j+9ETchleewq3BUqgk10orDOsTINojxHSQMz81Ny2DLlYRH8CFa4gN4JOLkjH+sp3iqC2cqSP5arttCe3DSw27uxGWtqKAe3FQq2gIFdWWLUCeN6v1WIPFKW1Q9z53ldypS/iPIRBsvudxi99yRXpiGP7bSHt/sxpMpaiR4RbcXOSOvu49qIc5FY0NHanFxcSQfeesLW8F9nSlXWTc0m2uV2jdyg6YSDqxkZNFdu+j7ieo4Ji5sKvsZUJsl5sjFJVipZX1v/NRVHdryc3XxQoKNLY7mb8ThOHm7CvmPqViiLiNj0nlSxjaoL9pQpGyprJOLT1E08DVZ1UJ5tdh2ipqiiM+MHGPtldVBMY8H5DQaKNsmgybS5S0PjNh0z51bzv+M/yqK5fTtC+yzxGB6z+3p5n8I5E00qA0O27YnVXafgF2SDRSpWu0D7lyez1iSxnCdd1DutVyDxhru15gQitXrtmzM9U0Vnq59syXb8G55jqupbWYDi7Fu3Uxypdc6xv/MbYgIFKu6WpayIjfHkuzMPbFdWRE1NfOxIOG053begFxSjP4vM8/VqJ4yxXX+m8CnHNztDd9bZCB88NLEz9Z/9okpoKWm7iJLkkYXzcBIxjQs3kbmB0BClXu9jUDEpg+kDLD/DrOJIg5gYx0QWUDSZDIVaX5qX6MuodOI4J/EZ+bLtU2/LjydDBrBAF02rsN/jhzdjKxtywXxoMgBf5DRvHqkcaay3L9mA8Ho2AUWBRkU6LFRF87vP6/B2UacJVHWjb0KP82Ol02RtW+yQzmppqetlmO6b6FA2I0nPAVQ5BDTtMk71H9H5w2q+DDJuNT4Qo4Vmyzb1YnCpE+f4co5uVTRl71OVFiNXWOOF4mRzSsWn2N1BGi2mxrdaX8LhZBsvNMU4u58M8zU8uTn7/AYl8sGshHLEbAAAAAElFTkSuQmCC";
    return (
      <div className="nadeBox">
        <div class="balloon3">ナデナデ</div>
        <div className="flex hand">
          <a onClick={this.onPlusClick}>
            <img src={handImage} />
          </a>
          <p className={this.Nadenade(push)}>{push}</p>
        </div>
      </div>
    );
  }

  onPlusClick = () => {
    const { push } = this.state;
    this.setState({ push: push + 1 });
  };
}
