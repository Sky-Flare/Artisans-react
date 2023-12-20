import { useMeArtisanQuery } from '../generated/graphql.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfilePage = () => {
  const { data, loading } = useMeArtisanQuery({})

  return (
    <div>
      <h1>This is the Profile Page</h1>
      {loading && <FontAwesomeIcon className='ml-4' icon={['fas', 'spinner']} spin />}
      <div className='overflow-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor vel tellus ut auctor.
        Integer velit lacus, efficitur vitae mi ac, ornare eleifend urna. Vivamus gravida tellus
        diam, sit amet tristique eros efficitur ut. Nullam laoreet purus sed nisi hendrerit, at
        sollicitudin mauris tristique. Cras porta dui sed odio vehicula placerat. Nulla in diam id
        ligula aliquam cursus pulvinar vitae enim. Nulla sit amet fermentum ipsum. Etiam viverra
        lorem eu ante faucibus, vel tinLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        tempor vel tellus ut auctor. Integer velit lacus, efficitur vitae mi ac, ornare eleifend
        urna. Vivamus gravida tellus diam, sit amet tristique eros efficitur ut. Nullam laoreet
        purus sed nisi hendrerit, at sollicitudin mauris tristique. Cras porta dui sed odio vehicula
        placerat. Nulla in diam id ligula aliquam cursus pulvinar vitae enim. Nulla sit amet
        fermentum ipsum. Etiam viverra lorem eu ante faucibus, vel tincidunt ipsum dapibus.
        Vestibulum tempor nunc dolor, ac mollis dui ultricies id. Morbi imperdiet dictum nunc a
        dictum. Quisque accumsan convallis urna, ac ultricies mi pulvinar vitae. Curabitur
        scelerisque mollis nisl. Sed ac finibus quam, at aliquam tellus. Pellentesque quam ante,
        tempus non ultricies eleifend, congue vitae nibh. Cras at risus imperdiet, porta massa et,
        auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Proin fermentum pretium ipsum, sit amet maximus purus condimentum non. Cras
        vulputate lacinia mattis. Nam at metus justo. Donec ex ipsum, cursus egestas convallis ut,
        ullamcorper eget felis. Praesent id rutrum nunc. Cras molestie sit amet ex et molestie.
        Mauris porta nisl imperdiet orci pretium tempor. Duis a sollicitudin quam. Cras ante massa,
        ornare maximus vestibulum vel, ultricies blandit est. Integer vel malesuada erat. Cras
        sagittis orci at sem tempor bibendum. Pellentesque tortor lacus, elementum ut libero nec,
        lacinia vulputate enim. Pellentesque leo tortor, interdum sed scelerisque a, pretium sit
        amet eros. Phasellus ex ex, varius eget bibendum eu, egestas eu lorem. Phasellus pharetra
        diam est, sed luctus metus dignissim sit amet. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Maecenas lacinia placerat magna, nec ultrices
        lorem ornare sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare
        suscipit accumsan. In vestibulum convallis pulvinar. Suspendisse consectetur dapibus ligula,
        in efficitur massa dictum ac. Phasellus quis sodales enim. Nulla tempus laoreet ante non
        facilisis. Integer magna metus, convallis vmpor nunc dolor, ac mollis dui ultricies id.
        Morbi imperdiet dictum nunc a dictum. Quisque accumsan convallis urna, ac ultricies mi
        pulvinar vitae. Curabitur scelerisque mollis nisl. Sed ac finibus quam, at aliquam tellus.
        Pellentesque quam ante, tempus non ultricies eleifend, congue vitae nibh. Cras at risus
        imperdiet, porta massa et, auctor tellus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Proin fermentum pretium ipsum, sit amet maximus
        purus condimentum non. Cras vulputate lacinia mattis. Nam at metus justo. Donec ex ipsum,
        cursus egestas convallis ut, ullamcorper eget felis. Praesent id rutrum nunc. Cras molestie
        sit amet ex et molestie. Mauris porta nisl imperdiet orci pretium tempor. Duis a
        sollicitudin quam. Cras ante massa, ornare maximus vestibulum vel, ultricies blandit est.
        Integer vel malesuada erat. Cras sagittis orci at sem tempor bibendum. Pellentesque tortor
        lacus, elementum ut libero nec, lacinia vulputate enim. Pellentesque leo tortor, interdum
        sed scelerisque a, pretium sit amet eros. Phasellus ex ex, varius eget bibendum eu, egestas
        eu lorem. Phasellus pharetra diam est, sed luctus metus dignissim sit amet. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas lacinia
        placerat magna, nec ultrices lorem ornare sed. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas ornare suscipit accumsan. In vestibulum convallis pulvinar.
        Suspendisse consectetur dapibus ligula, in efficitur massa dictum ac. Phasellus quis sodales
        enim. Nulla tempus laoreet ante non facilisis. Integer magna metus, convallis veel cursus
        id, posuere non orci. Proin nulla ligula, tristique et odio ut, aliquet tempus enim.
        Maecenas malesuada ante ut turpis malesuada, ut faucibus neque ultrices. Vestibulum
        ullamcorper scelerisque arcu, at elementum ex bibendum et. Aliquam orci elit, rhoncus in
        dolor ac, eleifend congue enim. Duis id posuere magna. Nam sed arcu quis justo suscipit
        efficitur ut vel libero. Proin lacus tellus, fringilla vel fermentum in, venenatis a ipsum.
        Maecenas fringilla metus at risus pharetra, iaculis viverra massa tempor. Integer ut nisi
        venenatis, vestibulum magna ut, dapibus ex. Praesent varius viverra velit id commodo. Nulla
        pretium neque vitae dapibus ultrices. Quisque ac libero egestas, malesuada est semper,
        tincidunt erat. Nunc blandit ipsum quis justo mattis, semper ullamcorper sem accumsan. Nunc
        vel lacus quam. Pellentesque eu nisl bibendum, egestas libero sit amet, blandit mi. Donec
        condimentum vestibulum diam vitae posuere.cidunt ipsum dapibus. Vestibulum tempor nunc
        dolor, ac mollis dui ultricies id. Morbi imperdiet dictum nunc a dictum. Quisque accumsan
        convallis urna, ac ultricies mi pulvinar vitae. Curabitur scelerisque mollis nisl. Sed ac
        finibus quam, at aliquam tellus. Pellentesque quam ante, tempus non ultricies eleifend,
        congue vitae nibh. Cras at risus imperdiet, porta massa et, auctor tellus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
        fermentum pretium ipsum, sit amet maximus purus condimentum non. Cras vulputate lacinia
        mattis. Nam at metus justo. Donec ex ipsum, cursus egestas convallis ut, ullamcorper eget
        felis. Praesent id rutrum nunc. Cras molestie sit amet ex et molestie. Mauris porta nisl
        imperdiet orci pretium tempor. Duis a sollicitudin quam. Cras ante massa, ornare maximus
        vestibulum vel, ultricies blandit est. Integer vel malesuada erat. Cras sagittis orci at sem
        tempor bibendum. Pellentesque tortor lacus, elementum ut libero nec, lacinia vulputate enim.
        Pellentesque leo tortor, interdum sed scelerisque a, pretium sit amet eros. Phasellus ex ex,
        varius eget bibendum eu, egestas eu lorem. Phasellus pharetra diam est, sed luctus metus
        dignissim sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Maecenas lacinia placerat magna, nec ultrices lorem ornare sed. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Maecenas ornare suscipit accumsan. In
        vestibulum convallis pulvinar. Suspendisse consectetur dapibus ligula, in efficitur massa
        dictum ac. Phasellus quis sodales enim. Nulla tempus laoreet ante non facilisis. Integer
        magna metus, convallis vel cursus id, posuere non orci. Proin nulla ligula, tristique et
        odio ut, aliquet tempus enim. Maecenas malesuada ante ut turpis malesuada, ut faucibus neque
        ultrices. Vestibulum ullamcorper scelerisque arcu, at elementum ex bibendum et. Aliquam orci
        elit, rhoncus in dolor ac, eleifend congue enim. Duis id posuere magna. Nam sed arcu quis
        justo suscipit efficitur ut vel libero. Proin lacus tellus, fringilla vel fermentum in,
        venenatis a ipsum. Maecenas fringilla metus at risus pharetra, iaculis viverra massa tempor.
        Integer ut nisi venenatis, vestibulum magna ut, dapibus ex. Praesent varius viverra velit id
        commodo. Nulla pretium neque vitae dapibus ultrices. Quisque ac libero egestas, malesuada
        est semper, tincidunt erat. Nunc blandit ipsum quis justo mattis, semper ullamcorper sem
        accumsan. Nunc vel lacus quam. Pellentesque eu nisl bibendum, egestas libero sit amet,
        blandit mi. Donec condimentum vestibulum diam vitae posuere.{' '}
      </div>
    </div>
  )
}
